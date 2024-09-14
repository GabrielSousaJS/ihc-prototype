import { IProductsForm } from "@/service/api/Model/Product-Form.model";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export function ProductForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProductsForm>();

  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleButtonClick = () => {
    const fileInput = document.getElementById("fileInput");
    fileInput?.click(); // Simula um clique no input escondido
  };

  return (
    <main>
      <form className="flex flex-col gap-8 w-[350px] md:w-[400px]  lg:w-[650px] shadow-2xl shadow-cor-shadow py-10 px-5 md:px-20 rounded-xl">
        <div className="lg:flex lg:justify-between">
          <label className="label flex flex-col gap-2 mb-5 lg:mb-0">
            Título do Produto
            <input
              className="input"
              {...register("title", {
                required: "Título é obrigatório",
              })}
              placeholder="Título do Produto"
            />
          </label>
          <label className="label flex flex-col gap-2">
            Descrição
            <input
              className="input"
              {...register("description", {
                required: "Descrição é obrigatória",
              })}
              placeholder="Descrição"
            />
          </label>
        </div>
        <label className="label flex flex-col gap-2">
          Valor
          <input
            type="number"
            className="input"
            {...register("price", {
              required: "Preço é obrigatório",
            })}
            placeholder="Valor do produto"
          />
        </label>
        <div className="flex flex-col gap-4">
          <label className="label flex flex-col gap-2">
            Anexar imagem
            {/* Input escondido */}
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              className="hidden"
              {...register("imgUrl", {
                required: "A imagem é obrigatória",
              })}
              onChange={handleImageChange}
            />

            {/* Botão customizado */}
            <div className="flex items-center">
              <button
                type="button"
                className="w-full py-3 px-20 bg-blue-900 rounded-lg font-Poppins font-normal text-base text-white  cursor-pointer"
                onClick={handleButtonClick}
              >
                Escolher arquivo
              </button>
              <span>{ }</span>
            </div>
          </label>

          {preview && (
            <div>
              <img src={preview} alt="Preview" className="w-50 h-auto" />
            </div>
          )}
        </div>
        <input
          type="submit"
          value={"Cadastrar"}
          className="py-3 px-20 bg-black rounded-lg font-Poppins font-normal text-base text-white  cursor-pointer"
        />
      </form>
    </main>
  );
}