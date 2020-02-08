import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { SuungDiagram } from "./components/SuungDiagram";
import AddForm from "./components/AddForm";

function App() {
  const [sets, setSets] = useState([
    { sets: ["I"], size: 1000, label: "Important: Delegate" },
    { sets: ["U"], size: 1000, label: "Urgent: Delegate" },
    { sets: ["S"], size: 1000, label: "Self: Make Time" },
    { sets: ["I", "U"], size: 300, label: "Delegate" },
    { sets: ["S", "U"], size: 300, label: "Do Next" },
    { sets: ["S", "I"], size: 300, label: "Schedule" },
    { sets: ["S", "I", "U"], size: 80, label: "Do Now" }
  ]);
  const [form, setForm] = useState({
    name: "",
    isImportant: false,
    isUrgent: false,
    isSelf: false
  });
  function handleSubmit(event) {
    let newSet = [{ sets: [form.name], size: 30 }];
    let oldSet = [...sets]
    if (form.isImportant && !form.isUrgent && !form.isSelf) {
      console.log("ONLY IMPORTANT")
      newSet.push({ sets: [form.name, "I"], size: 10000});
    }else if (!form.isImportant && form.isUrgent && !form.isSelf) {
      console.log("ONLY URGENT")
      newSet.push({ sets: [form.name, "U"], size: 10000 });
    }else if (!form.isImportant && !form.isUrgent && form.isSelf) {
      console.log("ONLY SELF")
      newSet.push({ sets: [form.name, "S"], size: 10000 });
    }else if (form.isImportant && form.isUrgent && !form.isSelf){
      console.log("IMPORTANT AND URGENT")
      newSet.push({ sets: [form.name,"I"], size: 20 });
      newSet.push({ sets: [form.name, "U"], size: 20 });
      newSet.push({ sets: [form.name, "U", "I"], size: 1000000 });
    }else if (form.isImportant && !form.isUrgent && form.isSelf){
      console.log("IMPORTANT AND SELF")
      newSet.push({ sets: [form.name,"I"], size: 500 });
      newSet.push({ sets: [form.name, "S"], size: 500 });
      newSet.push({ sets: [form.name, "S", "I"], size: 1000000 });
    }
    else if (form.isImportant && form.isUrgent && form.isSelf){
      console.log("IMPORTANT AND SELF AND URGENT")
      newSet.push({ sets: [form.name,"I"], size: 1000 });
      newSet.push({ sets: [form.name, "S"], size: 1000 });
      newSet.push({ sets: [form.name, "U"], size: 1000 });
      newSet.push({ sets: [form.name, "S", "I", "U"], size: 1000000 });
      
    }
    else if (!form.isImportant && form.isUrgent && form.isSelf){
      console.log("SELF AND URGENT")
      newSet.push({ sets: [form.name, "S"], size: 1000 });
      newSet.push({ sets: [form.name, "U"], size: 1000 });
      newSet.push({ sets: [form.name, "S", "U"], size: 1000000 });
      
    }
    setSets([...oldSet, ...newSet]);
    setForm({
      name: "",
      isImportant: false,
      isUrgent: false,
      isSelf: false
    })
    event.preventDefault();
  }
  function updateForm(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setForm({
      ...form,
      [name]: value
    });
  }
  return (
    <div className="App">
      <h1 style={{textAlign:'center', fontSize: '5em'}}>Suung Diagram</h1>
      <AddForm form={form} handleChange={updateForm} handleSubmit={handleSubmit}/>
      <SuungDiagram sets={sets} />
    </div>
  );
}

export default App;
