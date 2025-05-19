import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
const Home = () => {

    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 text-white flex flex-col font-sans">

        

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
                <motion.h2
                    className="text-5xl font-extrabold mb-6"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Welcome to BlogX!
                </motion.h2>

                <motion.p
                    className="text-xl max-w-3xl leading-relaxed mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    Apni baatein duniya ke saath batana chaahte ho? <br />
                    <strong>BlogX</strong> par aap apne vichaar, jazbaat aur kahaniyaan likh sakte hain.
                    likhiye apna blog aur kisi ke dil ko chhoo jaaiye.
                    Har lafz mein taqat hoti hai — ho sakta hai aapki kahani kisi ke liye roshni ban jaaye.
                </motion.p>

                <motion.button
                    className="bg-yellow-300 text-black px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-400 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={()=>navigate("/editor")}
                >
                    Write a Blog
                </motion.button>
            </main>
        </div>
    );
};

export default Home;
