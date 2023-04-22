import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    nombre: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    correo: {
      type: mongoose.Schema.Types.String,
      required: true,
      index: true,
      unique: true,
    },
    password: {
      type: mongoose.Schema.Types.String,
      required: true,
      set: (valor) => {
        const passwordHashed = bcryptjs.hashSync(valor);
        return passwordHashed;
      },
    },
    eventos: {
      type: [mongoose.Schema.Types.ObjectId],
    },
  });
  
  export const UsuarioModel = mongoose.model("usuarios", usuarioSchema);