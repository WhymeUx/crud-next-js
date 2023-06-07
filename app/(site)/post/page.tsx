
import Button from "@/app/components/Elements/Button";
import Modaladdpost from "@/app/components/Layouts/ModalAddPost";
import ModalDeletepost from "@/app/components/Layouts/ModalDeletePost";
import ModalEditpost from "@/app/components/Layouts/ModalEditPost";
import { Category } from "@prisma/client";

interface Post {
    id: number;
    title: string;
    content: string;
    category: Category;
    categoryId: number;
}

const getPost = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/post`, {
        next: { revalidate: 0 },
    });
    const data = (await res.json()) as Post[];
    return data;
};

const getCategory = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/post/category`);
    const data = await res.json();
    return data;
};

const Page = async () => {
    const [post, category] = await Promise.all([getPost(), getCategory()]);
    return (
        <div>
            <Modaladdpost dataCategory={category}/>
            <table className="w-full mt-6">
                <thead className="bg-slate-300">
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {post.map((post, index) => {
                        return (
                            <tr
                                className="text-center align-middle"
                                key={post.id}>
                                <td>{index + 1}</td>
                                <td>{post.title}</td>
                                <td>{post.content}</td>
                                <td>{post.category.name}</td>
                                <td>
                                    <div className="flex gap-3 justify-center">
                                        <ModalEditpost dataPost={post} dataCategory={category}/>
                                        <ModalDeletepost dataPost={post}/>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                    <tr>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Page;
