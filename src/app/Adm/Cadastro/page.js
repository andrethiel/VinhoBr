import Card from "@/app/Components/Card";

export default function Principal() {
  return (
    <div className="flex justify-center items-center flex-row h-full gap-10 mt-10">
      <Card tipo="adm" />
      <Card tipo="adm" />
    </div>
  );
}
