import { NextApiResponse, NextApiRequest } from "next";
import { connectDB } from "@/libs/mongodb";
import User from "@/models/user";

export default async function handler (req: NextApiRequest, res: NextApiResponse){
    try{
        await connectDB();

        if (req.method === 'POST'){
            const {userId, videoId} = req.body;

            const user = await User.findById(userId);
            if(!user) {
                return res.status(404).json({error: 'Usuario no encontrado'});
            }

            user.favorites.push(videoId);
            await user.save();

            return res.status(200).json({message: 'Video agregado a favoritos'});
        }

        return res.status(405).json({error: 'Metodo no permitido'});
    }catch (error) {
        console.error('Error al agregar video a favoritos', error);
        return res.status(500).json({error: 'Error al agregar video a favoritos'});
    }
}