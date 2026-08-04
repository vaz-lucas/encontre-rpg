import { useState, createContext } from "react";

const loginContext = createContext([]);

const [logged, setLogged] = useState(false);

function isLogged() {}
