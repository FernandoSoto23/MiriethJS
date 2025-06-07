import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
export default function Login() {
    const [usuario, setUsuario] = useState({
        "usuario": "",
        "pwd": ""
    });

    const LoguearUsuario = async (e) => {
        e.preventDefault();
        try {
            console.log("Intentando login con:", usuario);

            const resp = await axios.get("https://api.jsonbin.io/v3/b/6843dd5b8561e97a50208ca8", {
                headers: {
                    "X-Master-Key": "$2a$10$fLYyL72ePkJcZpecsnMcgOkDc32tzfVZx9gAVtbJnnLQAkC7D9tDi",
                    "Content-Type": "application/json"
                }
            });

            const data = resp.data.record;

            if (
                data.username === usuario.usuario &&
                data.pwd === usuario.pwd
            ) {
                toast.success("Login exitoso 🎉");
                console.log("Usuario autenticado:", data);
            } else {
                toast.error("Usuario o contraseña incorrectos ❌");
            }

        } catch (error) {
            console.error("Error al obtener los datos:", error);
            alert("Error al conectarse al servidor");
        }
    };
    return (
        <form
            className="bg-gray-800 h-screen w-full flex flex-col items-center justify-center"
            onSubmit={LoguearUsuario}
        >
            <h1
                className="text-6xl font-extrabold text-white"
            >Inicia <span className="text-blue-200">Sesion</span></h1>
            <p className="text-white text-2xl m-3">Para <span className="text-blue-200 font-bold">gestionar</span> tus productos <span className="text-blue-200 font-bold">disponibles</span></p>
            <div className="p-5 bg-gray-700 min-w-96 flex flex-col items-center justify-center rounded-xl shadow-2xl">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <h1 className="text-4xl font-outfit font-extrabold text-white ml-2">
                        Miri
                        <span className="text-blue-200">
                            Eth
                        </span>
                    </h1>
                </a>
                <div className="flex flex-col p-5 w-full gap-2">
                    <input
                        className="p-3 rounded-sm border-"
                        placeholder="Usuario"
                        value={usuario.usuario}
                        onChange={(e) => setUsuario(prev => ({ ...prev, usuario: e.target.value }))}
                    />

                    <input
                        type="password"
                        className="p-3 rounded-sm  border-"
                        placeholder="Contraseña"
                        value={usuario.pwd}
                        onChange={(e) => setUsuario(prev => ({ ...prev, pwd: e.target.value }))}

                    />
                    <button
                        type="submit"
                        className="bg-blue-300 hover:bg-blue-500 p-3 rounded-sm  font-bold"
                    >Iniciar Sesion</button>

                </div>

            </div>
        </form>
    )
}
