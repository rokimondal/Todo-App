import connectDB from '../database/index'
import Image from "next/image";

export default function Home(){
  connectDB();
  return (
    <div> wellcome to home page</div>
  );
}
