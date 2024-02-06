


import EditTopicData from "@/components/editForm";

const getDatabyId = async (id) => {
    try {
        const resData = await fetch(`http://localhost:3000/api/topics/${id}`, {
            cache: "no-store"
        });

        if (!resData.ok) {
            throw new Error("Failed to fetch");
        }

        return resData.json();
    } catch (error) {
        console.error(error);
        return null; // Return a default value or handle the error accordingly
    }
}

export default async function EditTopic({ params }) {
    const { id } = params;
    const { data } = await getDatabyId(id);
    console.log("the idData is ");
    const { title, description } = data;

    return (
        <>
            <EditTopicData id={id} titles={title} descriptions={description} />
        </>
    );
}
