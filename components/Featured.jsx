import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useState } from "react";

const Featured = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/img/slider1.jpg",
    "/img/slider2.jpg",
    "/img/slider3.jpg",
  ];
 
  const handleArrow = (direction) =>{
      if(direction==="l"){
          setIndex(index !== 0 ? index-1 : 2)
      }
      if(direction==="r"){
          setIndex(index !== 2 ? index+1 : 0)
      }
  }

  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0 }} onClick={()=>handleArrow("l")}>
        <Image src="/img/arrowl.png" alt="" layout="fill" objectFit="contain"/>
      </div>
      <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <div className={styles.banner}>
              <div className={styles.content}>
                <h1>TITLE MOVIE</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt augue ut purus volutpat fermentum. Aliquam eget ultricies ante, ut ultrices velit. Aenean commodo accumsan quam, at aliquet metus mollis ac. Donec mollis velit leo, ac dapibus justo dignissim vel. Phasellus dui nulla, viverra eu orci eu, dapibus sodales elit. Nullam id sollicitudin erat. Suspendisse vehicula dictum lectus, fermentum porttitor turpis efficitur ut. Vestibulum aliquam vestibulum tortor, mattis tempus nulla malesuada in. Pellentesque egestas eget enim vitae placerat. Fusce non magna non enim maximus mattis nec ac mi. Nulla vel felis nibh.
                </p>
              </div>
            </div>
            <Image className={styles.images} src={img} alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }} onClick={()=>handleArrow("r")}>
        <Image src="/img/arrowr.png" layout="fill" alt="" objectFit="contain"/>
      </div>
    </div>
  );
};

export default Featured;
