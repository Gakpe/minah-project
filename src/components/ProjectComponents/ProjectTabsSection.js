import React from 'react';
import {Tabs} from 'antd';

const onChange = (key) => {
    console.log(key);
};
const items = [
    {
        key: '1',
        label: 'Projects',
        children: <div className={"flex flex-col items-center justify-start gap-7 w-full h-full"}>
            <div className={"flex flex-col items-start justify-start w-full h-full"}>
                <div>Subtitle</div>
                <p className={"w-fit text-justify"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla
                    arcu, suscipit eget sem quis,
                    volutpat lobortis massa. Fusce vestibulum enim imperdiet, convallis lorem non, sodales neque. Cras
                    faucibus est vitae odio facilisis posuere. Vestibulum id tortor ut arcu euismod ullamcorper non ut
                    orci.
                    Integer ornare nulla in nisi mattis iaculis. Praesent quis nisi orci. Nullam nulla lacus, bibendum
                    nec
                    euismod at, molestie sit amet ligula. </p>
            </div>
            <div className={"flex flex-col items-start justify-start w-full h-full"}>
                <div>Subtitle</div>
                <p className={"w-fit text-justify"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla
                    arcu, suscipit eget sem quis,
                    volutpat lobortis massa. Fusce vestibulum enim imperdiet, convallis lorem non, sodales neque. Cras
                    faucibus est vitae odio facilisis posuere. Vestibulum id tortor ut arcu euismod ullamcorper non ut
                    orci.
                    Integer ornare nulla in nisi mattis iaculis. Praesent quis nisi orci. Nullam nulla lacus, bibendum
                    nec
                    euismod at, molestie sit amet ligula. </p>
            </div>
        </div>,
    }, {
        key: '2',
        label: 'Location',
        children: 'Content of Tab Pane 1',
    }, {
        key: '3',
        label: 'Investment strategy',
        children: 'Content of Tab Pane 1',
    }, {
        key: '4',
        label: 'Development thesis',
        children: 'Content of Tab Pane 1',
    }, {
        key: '5',
        label: 'Team',
        children: 'Content of Tab Pane 1',
    },

];
console.log(items);
const ProjectTabsSection = () => (
    <div className={"bg-primary w-full h-full rounded-md p-10"}>
        <Tabs
            rootClassName={"w-full h-full"}
            defaultActiveKey="1"
            onChange={onChange}
            items={items}
            indicatorSize={(origin) => origin - 16}
        />
    </div>
);
export default ProjectTabsSection;
