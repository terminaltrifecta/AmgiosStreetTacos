import Stripe from 'stripe';
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!);

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY as string, {
  apiVersion: '2024-11-20.acacia',
});

const endpointSecret = process.env.NEXT_PUBLIC_WEBHOOK_SECRET;

//interface for each item in the cart
export interface ItemData {
  item_name: string;
  item_id: number;
  quantity: number;
  comments: string;
}

//interface for the entire order data
export interface PostData {
  customer_first_name: string;
  customer_last_name: string;
  email: string;
  phone_number: string;
  location_id: number;
  time_placed: string;
  time_requested: string;
  location: string;
  is_pickup: boolean;
  status_id: number;
  cart: ItemData[];
}

//create cartData variable of type PostData
let cartData: PostData;

//function is called upon recieving webhook from stripe
export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const sig = req.headers.get("stripe-signature");
  let event: Stripe.Event;
  let result = "Webhook called.";
  let uuid: string | undefined;

  try {
    event = stripe.webhooks.constructEvent(rawBody, sig!, endpointSecret!);
    const paymentIntent = event.data.object as Stripe.PaymentIntent;
    uuid = paymentIntent.metadata?.uuid;
  } catch (err: unknown) {
    const errorMessage = (err instanceof Error) ? err.message : 'Error extrating data from Payment Intent object';
    console.error("Error extrating data from Payment Intent object:", errorMessage);
    return NextResponse.json({ error: errorMessage }, { status: 400 });
  }

  
  //if block only runs and handles charge succeeded event from stripe
  //see if there exists a row in the temporary orders table with a matching uuid value
  if (event.type === "charge.succeeded") {
    let { data: temporary_orders, error } = await supabase
      .from('temporary_orders')
      .select('cart')
      .eq('id', uuid)
      .limit(1);
    cartData = temporary_orders![0].cart as PostData;
    console.log(cartData);
    //add error handling here

    //executes when uhhh cartData exists and isnt null i guess
    if (cartData) {
      let customer_id;
        // Check if there exists a customer email that matches the customer email from the temporary orders table
        const { data: customerData, error: customerError } = await supabase
          .from('customers')
          .select('customer_id')
          .eq('email', cartData.email)
          .single();
    
        // If there's an error or the data doesn't exist in the customers table
        if (customerError || !customerData) {
          const { data: insertCustomerData, error: insertCustomerError } = await supabase
            .from('customers')
            .insert([
              {
                first_name: "Eric",
                last_name: "Mize",
                email: "Luhrikcy.com",
                phone_number: "(586)902-5812",
                // first_name: cartData.customer_first_name,
                // last_name: cartData.customer_last_name,
                // email: cartData.email,
                // phone_number: cartData.phone_number,
              },
            ])
            .select('customer_id')
            .single();
    
          // If an error is thrown, handle the error
          if (insertCustomerError || !insertCustomerData) {
            throw new Error('Failed to insert customer');
          }
    
          // Assign the inserted customer ID
          customer_id = insertCustomerData.customer_id;
        } else {
          customer_id = customerData.customer_id;
        }
    
        // Extract variables from cartData
        const { location_id, time_placed, time_requested, location, is_pickup, status_id, cart } = cartData;
    
        // Insert them into the orders table
        const { data: orderResponse, error: orderError } = await supabase
          .from('orders')
          .insert([
            {
              location_id,
              customer_id,
              time_placed,
              time_requested,
              location,
              is_pickup,
              status_id,
            },
          ])
          .select('order_id')
          .single();
    
        // Handle error
        if (orderError) throw new Error('Failed to insert order');
    
        // Take the order_id
        const order_id = orderResponse.order_id;
    
        // Insert cart items into the ordered_items table
        for (const item of cart) {
          const { item_id, quantity, comments } = item;
          const { error: itemError } = await supabase
            .from('ordered_items')
            .insert([
              {
                order_id,
                item_id,
                quantity,
                comments,
              },
            ]);
    
          // Handle error for each item
          if (itemError) {
            console.error('Error inserting item:', itemError.message);
            return NextResponse.json({ error: 'Failed to insert cart item' }, { status: 500 });
          }
        }
    } 
  
    //200 OK
    return NextResponse.json({ received: true, status: result });

  } else if (event.type === "payment_intent.succeeded" || "payment_intent.created") {
    console.log(`Event type recieved: ${event.type}`);
  } else {
    console.warn(`Unhandled event type ${event.type}`);
  }
}

export const config = { api: { bodyParser: false } };

//delete that row in the temporary table with a matching uuid value
//dont uncomment until we wanna test row deletion functionality

/*
try {
  // Delete the row in the temporary_orders table
  const { error } = await supabase
    .from("temporary_orders")
    .delete()
    .eq("id", uuid);

    //error handling
  if (error) throw new Error(error.message);
} catch (error: unknown) {
  const errorMessage = (error instanceof Error) ? error.message : 'Unknown error deleting temporary order';
  console.error("Error deleting temporary order:", errorMessage);
  return NextResponse.json({ error: errorMessage }, { status: 500 });
}
*/