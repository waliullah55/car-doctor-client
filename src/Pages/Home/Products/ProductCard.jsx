import ReactStars from "react-rating-stars-component";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  const { image, rating, title, price } = product;
  return (
    <motion.div className="card w-96 bg-base-100 border border-[#e8e8e8]">
      <figure className="px-5 pt-5">
        <motion.img
          animate={{
            x: 0,
            y: 0,
            scale: 1.2,
            rotate: 360,
          }}
          transition={{
            repeatType: "tween",
            duration: 1
          }}
          src={image}
          alt="Shoes"
          className="rounded-xl w-full h-[220px] bg-[#F3F3F3]"
        />
      </figure>
      <div className="card-body pt-3 items-center text-center">
        <span>
          <ReactStars
            count={5}
            isHalf={true}
            value={rating}
            edit={false}
            size={30}
            activeColor="#FF912C"
          />
        </span>
        <h2 className="card-title text-[#444] text-2xl -mt-3 font-bold">
          {title}
        </h2>
        <motion.p
          className="text-xl font-semibold text-[#ff3811]"
        >
          $ {price}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
