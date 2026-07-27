import { useState, createContext } from "react";

const loginContext = React.createContext([]);

const [logged, setLogged] = useState(false);

function isLogged() {}
