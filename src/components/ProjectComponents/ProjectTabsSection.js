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
            <div className={"flex flex-col gap-2 items-start justify-start w-full h-full"}>
                <div className={"text-xl font-semibold"}>1. Residential Building in Adidogome:</div>
                <p className={"w-fit text-justify"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla
                Our residential building is located in the neighborhood of Adidogome, close to Lomé in Togo. It offers residents accommodation with robust 
                rental returns for investors. The property benefits from its proximity to local amenities and transport links, making it a desirable location
                for tenants. </p>
            </div>
            <div className={"flex flex-col gap-2 items-start justify-start w-full h-full"}>
                <div className={"text-xl font-semibold"}>2. Commercial Space: </div>
                <p className={"w-fit text-justify"}> 
                Located within the same property, this commercial space will serve as a hub for local entrepreneurs and businesses. 
                We want this place to drive foot traffic and that it creates a community-focused ecosystem. It is designed to support 
                the economic development of the area by providing prime retail and spaces. We are currently looking for the perfect partner 
                to use this available space.</p>
            </div>
            <div className={"flex flex-col gap-2 items-start justify-start w-full h-full"}>
                <div className={"text-xl font-semibold"}>3. Agricultural Land in Kovie: </div>
                <p className={"w-fit text-justify"}> 
                In the outskirts of Lomé, our agricultural land in Kovie is dedicated to sustainable farming practices. This investment will not 
                only support Togo's agricultural sector but also aligns with global trends towards sustainable food production and eco-friendly 
                farming techniques.</p>
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
        children:  <div className={"flex flex-col items-center justify-start gap-7 w-full h-full"}>
        <div className={"flex flex-col gap-2 items-start justify-start w-full h-full"}>
            <p className={"w-fit text-justify"}> At the heart of Minah's investment philosophy relies values of sustainability and positive impact for future generations. 
            The Lomé-Kovié project embodies this dedication through its innovative approach to real estate and agricultural development, designed to foster environmental management, social equality, and economic growth.
            By integrating sustainability into every facet of this project, we aim not only to drive financial returns but also to create lasting positive impacts on local communities in Lomé area. 
            With this project, we are adhering to the UN SDGs ( Sustainable Development Goals) as we ensure that our investments contribute meaningfully to the global goals of reducing inequality and protecting the environment. </p>
            
            <div className={"text-xl font-semibold"}>SDG 1 - No Poverty</div>
            
            <p className={"w-fit text-justify"}> With the Lomé-Kovié project , we are planning to deploy a comprehensive set of community engagement initiatives, including sponsorship of local activities and food distributions tailored to the needs of rural communities.  
            These programs are specifically designed to uplift individuals living below the poverty line, offering not just temporary relief but sustainable pathways out of poverty. Through these efforts, we aim to empower the underprivileged by providing them with the tools and opportunities necessary for long-term self-sufficiency. </p>
        
            <div className={"text-xl font-semibold"}>SDG 5 - Gender Equality </div>

            <p className={"w-fit text-justify"}> In the commercial Space of the building located in Adidogome, we are dedicated to advancing gender equality through concrete measures. 
            We are currently working to allocate premises to organizations focused on the professional training of women, ensuring their active and successful integration into the job market. This initiative not only supports women's economic empowerment but also promotes their broader societal inclusion, 
            contributing to the breaking down of systemic barriers that have historically hindered women's participation in the workforce. </p>

            <div className={"text-xl font-semibold"}>SDG 15 - Life on Land </div>

            <p className={"w-fit text-justify"}> The Lomé-Kovié project is committed to preserving terrestrial ecosystems through sustainable agricultural practices spread across approximately 10 hectares of rural land. 
            We are planning in implementing policies that encourage responsible land use and agricultural techniques that minimize environmental impact. Additionally, we will provide ongoing support and training for local farmers, 
            enhancing their capabilities in sustainable farming methods and wildlife conservation. This initiative not only protects the environment but also ensures the viability of local agriculture for future generations. </p>

        </div>        
    </div>,
    }, {
        key: '5',
        label: 'Team',
        children: <div className={"flex flex-col items-center justify-start gap-7 w-full h-full"}>
                    <div className={"flex flex-col gap-2 items-start justify-start w-full h-full"}>
                         <p className={"w-fit text-justify"}> Hervé and Julien Gakpé, the co-founders of Minah.io, will directly manage the Lomé-Kovié project.
                            This will non only establish the foundation of operational project management and reporting standards but will also set a precedent for all future projects. 
                            As the project evolves, we intend to engage third-party managers to oversee the new investment pools, ensuring scalability and diversity in project management. 
                            As a resultat, the main goal for the first management team is to identify and drastically mitigate operational risks, in order to ensure cash flow stability for investors, and all in one processes for future project leaders. </p>,
                    </div>        
                </div>        
  },

];
console.log(items);
const ProjectTabsSection = () => (
    <div className={"bg-[#FAFAFA] drop-shadow-lg w-full h-full rounded-lg p-10"}>
        <Tabs
            rootClassName={"w-full  text-black h-full"}

            defaultActiveKey="1"
            onChange={onChange}
            items={items}
            // indicatorSize={(origin) => origin - 16}
        />
    </div>
);
export default ProjectTabsSection;
