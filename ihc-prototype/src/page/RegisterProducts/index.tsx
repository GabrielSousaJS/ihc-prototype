import { ProductForm } from "@/components/RegisterProduct";

export function RegisterProducts() {
  return (
    <div className="flex flex-col gap-10 justify-between mt-32">
      <div className="flex flex-col gap-16 max-w-screen-xl mx-auto">
        <ProductForm />
      </div>
    </div>
  );
}