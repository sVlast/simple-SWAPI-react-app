import "./App.css";
import "antd/dist/antd.css";
import { List, Card } from "antd";

//const fetchData = await fetch("https://swapi.dev/api/people/1");

const data = [
    {
        title: "Dizajn digitalnih proizvoda",
        startTime: 9,
        endTime: 10,
        type: "Predavanje",
    },
    {
        title: "Digitalna fotografija",
        startTime: 14,
        endTime: 15,
        type: "Laboratorijske vježbe",
    },
    {
        title: "Digitalna slika",
        startTime: 16,
        endTime: 17,
        type: "Laboratorijske vježbe",
    },
    {
        title: "XML programiranje",
        startTime: 18,
        endTime: 19,
        type: "Predavanje",
    },
];

function App() {
    return (
        <div className="App">
            <header>
                <h1>Sample text</h1>
            </header>
            <List
                grid={{ gutter: 16, column: 3 }}
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <Card title={item.title}>
                            <span>{item.type}</span>
                            <span>{`${item.startTime} - ${item.endTime}`}</span>
                        </Card>
                    </List.Item>
                )}
            />
            <footer>
                <p>(c) Sandro Vlastelica - 2021</p>
            </footer>
        </div>
    );
}

export default App;
