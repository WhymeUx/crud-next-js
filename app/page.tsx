import Card from "./components/Card";

export default function Home() {
    return (
        <div className="grid grid-cols-2 gap-5">
            <Card title="Jumlah Postingan" count="20" />
            <Card title="Jumlah Product" count="20" bg="bg-yellow-500" />
            <Card title="Jumlah Kategori" count="20" bg="bg-blue-500" />
            <Card title="Jumlah Brand" count="20" bg="bg-red-500" />
        </div>
    );
}
