import MainLayout from "@/layouts/MainLayout";
import FormSection from "@/components/FormSection";

const EditProfile = () => {
    return (
        <MainLayout>
            <div className={"flex flex-col w-full items-center justify-center px-20 h-full py-10"}>
                <FormSection/>
            </div>
        </MainLayout>
    )
}
export default EditProfile;