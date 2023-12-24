import MainLayout from "@/layouts/MainLayout";
import FormSection from "@/components/FormSection";

const EditProfile = () => {
    return (
        <MainLayout>
            <div className={"flex flex-col w-full items-center justify-center  h-full py-10"}>
                <div className={" w-4/6"}>
                <FormSection/>
                </div>
            </div>
        </MainLayout>
    )
}
export default EditProfile;