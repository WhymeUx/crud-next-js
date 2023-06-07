"use client";

import { SyntheticEvent, useState } from "react";
import type { Category } from "@prisma/client";
import { useRouter } from "next/navigation";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
import Label from "../Elements/Input/Label";
import Modal from "../Fragments/Modal";

const ModalEditpost = ({ dataCategory, dataPost }: { dataCategory: Category[], dataPost: any }) => {
    const [title, setTitle] = useState(dataPost.title);
    const [content, setContent] = useState(dataPost.content);
    const [category, setCategory] = useState(dataPost.categoryId);
    const [isOpen, setIsOpen] = useState(false);

    const handleModal = () => {
        setIsOpen(!isOpen);
    };

    const router = useRouter();
    

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        await fetch(`/api/post/${dataPost.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                content: content,
                categoryId: Number(category),
            }),
        });

        setTitle("");
        setContent("");
        setCategory("");
        router.refresh();
        setIsOpen(false);
    };

    return (
        <div>
            <Button click={handleModal} type="button" title="Edit" bg="bg-yellow-500" />
            <Modal handle={isOpen ? "modal-open" : ""} title="EDIT DATA">
                <form onSubmit={handleSubmit}>
                    <InputForm
                        value={title}
                        onChange={(e: any) => setTitle(e.target.value)}
                        labelText="Title"
                        placeholder="Title"
                        type="text"
                        htmlFor="title"
                        id="title"
                    />
                    <InputForm
                        value={content}
                        onChange={(e: any) => setContent(e.target.value)}
                        labelText="Content"
                        placeholder="Content"
                        type="text"
                        htmlFor="content"
                        id="content"
                    />
                    <Label labelText="Category" forHtml="category" />
                    <select
                        value={category}
                        onChange={(e: any) => setCategory(e.target.value)}
                        name="category"
                        id="category"
                        className="w-full select select-bordered">
                        <option value="" disabled>
                            Select Category
                        </option>
                        {dataCategory.map((categories) => {
                            return (
                                <option key={categories.id} value={categories.id}>
                                    {categories.name}
                                </option>
                            );
                        })}
                    </select>
                    <div className="mt-5 flex justify-center items-center gap-7">
                        <Button
                            type="button"
                            title="Cancel"
                            bg="bg-yellow-500"
                            click={handleModal}
                        />
                        <Button type="submit" title="Save" bg="bg-blue-500" />
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default ModalEditpost;
