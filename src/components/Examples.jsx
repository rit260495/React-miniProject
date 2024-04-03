import { useState } from "react";
import TabButton from "./TabButton";
import Section from "./Section";
import { EXAMPLES } from "../data";
import Tabs from "./Tabs";
export default function Examples() {

    const [selectedTopic, setSelectedTopic] = useState('');
    function handleClick(selectedButton) {
        // console.log('Hello world - Selected ')
        setSelectedTopic(selectedButton)
        console.log(selectedTopic)
    }
    return (
        <Section title={Examples} id='examples'>
            <Tabs
                buttonsContainer="menu"
                buttons={<>
                    <TabButton isSelected={selectedTopic === 'components'} onClick={() => {
                        handleClick('components')
                    }} >Components</TabButton>
                    <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => {
                        handleClick('jsx')
                    }}>JSX</TabButton>
                    <TabButton isSelected={selectedTopic === 'props'} onClick={() => {
                        handleClick('props')
                    }}>Props</TabButton>
                    <TabButton isSelected={selectedTopic === 'state'} onClick={() => {
                        handleClick('state')
                    }}>State</TabButton>
                </>}>

            </Tabs>

            {!selectedTopic ? (<p>Please select a topic</p>) : (<div id='tab-content'>
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>
                        {EXAMPLES[selectedTopic].code}
                    </code>
                </pre>
            </div>)}

        </Section>)
}