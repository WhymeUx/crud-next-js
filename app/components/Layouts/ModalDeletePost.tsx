"use client";

import { SyntheticEvent, useState } from "react";
import type { Category } from "@prisma/client";
import { useRouter } from "next/navigation";
import Button from "../Elements/Button";
import Modal from "../Fragments/Modal";

interface Post {
    id: number;
    title: string;
    content: string;
    category: Category;
    categoryId: number;
}

const ModalDeletepost = ({ dataPost }: { dataPost: any }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleModal = () => {
        setIsOpen(!isOpen);
    };

    const router = useRouter();

    const handleDelete = async (e: SyntheticEvent) => {
        e.preventDefault();
        const id = dataPost.id
        await fetch(`/api/post/${id}`, {
            method: "DELETE",
        });

        router.refresh();
        setIsOpen(false);
    };

    return (
        <div>
            <Button
                click={handleModal}
                type="button"
                title="Delete"
                bg="bg-red-500"
            />
            <Modal handle={isOpen ? "modal-open" : ""} title="DELETE POST">
                <h1 className="mt-5">Yakin Ingin Menghapus {dataPost.id}</h1>
                <div className="mt-5 flex justify-center items-center gap-7 ">
                    <Button
                        type="button"
                        title="Cancel"
                        bg="bg-yellow-500"
                        click={handleModal}
                    />
                    <Button click={handleDelete} type="submit" title="Delete" bg="bg-blue-500" />
                </div>
            </Modal>
        </div>
    );
};

export default ModalDeletepost;
