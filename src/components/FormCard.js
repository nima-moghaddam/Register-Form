// Components
import FormHandler from "./FormHandler";

const FormCard = () => {
  return (
    <section
      className="bg-gray-800 shadow-lg shadow-gray-800/90 mx-auto mt-10 mb-2 p-5 md:p-7 rounded-3xl w-11/12 
    md:w-[46rem]"
    >
      <h1 className="text-white font-medium text-lg md:text-4xl select-none ml-3">
        Register
        <span className="text-indigo-300 font-bold text-shadow ml-3">
          Form
        </span>
      </h1>
      <FormHandler />
    </section>
  );
};

export default FormCard;
