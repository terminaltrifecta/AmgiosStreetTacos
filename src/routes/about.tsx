import React from "react";
import Footer from "../components/Footer/Footer.tsx";
import Tab from "../components/Tab/Tab.tsx";

export default function About() {
  return (
    <React.StrictMode>
      <Tab
        text="We treat each and every guest here like family. You don't get that kind of experience at no fast food joint. Pick any item from our large menu and expect the best of the best. We only use halal food products, except those that are pork."
        textRight="true"
        img="src\assets\about\amigosgrub01.jpg"
      />
      <Tab
        text="We have three bona fide Mexican locations. We take pride in our authenticity. We establish and maintain a clean and welcoming environment. Our objective is to deliver memorable, enjoyable experiences and memories!"
        textRight="false"
        img="src\assets\about\amigos.jpeg"
      />
      <Tab
        text="You won't believe the food you eat here. When we say authentic, we're not playing around. This is Mexican like you've never had before. But don't take our word for it; come by and taste the flavors for yourself!"
        textRight="true"
        img="src\assets\about\amigosgrub.jpg"
      />
    </React.StrictMode>
  );
}
