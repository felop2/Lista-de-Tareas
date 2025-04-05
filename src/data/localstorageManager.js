 

export const add = (key, obj) => { 
    const list = getAll(key) || [];
    const id = generateRandomNumericID();
    list.push({...obj, id});
    serializAndSavelist(list);
};

export const get = (key, id) => {
   const list = getAll(key);
   return list.find((obj) => obj.id === id);
}

export const getAll = (key) => {
    const ListAsString = localStorage
    .getItem(key);
    return JSON.parse(ListAsString) || [];
}

export const  serializAndSavelist = (key, list) => {
    localStorage.setItem(key, JSON.stringify(list));
}

export const generateRandomNumericID = () => {
    return Math.floor(Math.random() * 1000000);
}
