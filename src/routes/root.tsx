import CardTab from "../components/CardTab/CardTab.tsx";
import Slideshow from "../components/Slideshow/Slideshow.tsx";
import Tab from "../components/Tab/Tab.tsx";

export default function Root() {
  return (
    <>
      <div className="d-grid gap-3">
        <Slideshow />
        <Tab
          text="Carne Asada Fries. They're f#cking delicious."
          textRight="true"
          img=".\public\static\assets\home\fries.jpg"
        />
        <Tab
          text="Enjoy real Mexican from the comfort of your home with online delivery services. You can find us anywhere!"
          textRight="false"
          img=".\public\static\assets\home\delivery.jpg"
        />
        <CardTab
          img1=".\public\static\assets\slideshow\img1.png"
          hdr1="Chicken Tacos"
          img2=".\public\static\assets\home\carnetacos.jpg"
          hdr2="Carne Asada Tacos"
          img3=".\public\static\assets\home\barriatacos.jpg"
          hdr3="Birria Tacos"
        />
        <Tab
          text="Love what you see? Take everything home with our quick carry-out."
          textRight="false"
          img=".\public\static\assets\home\carryout.jpg"
        />
      </div>
    </>
  );
}
