import React from "react";

const FeatureSections = ({title, description}) => {
    return (
        <div className={"flex flex-col w-full pb-5 items-start h-64 px-4 justify-end rounded-lg bg-secondary"}>
            <h1 className={"text-white text-lg"}>{title}</h1>
            <h1 className={"text-white text-sm"}>{description}</h1>
        </div>
    )
}
export default FeatureSections;