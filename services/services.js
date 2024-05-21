const URLbase = "http://localhost:3000";

export async function getUsuarrios() {
    let response = await fetch(`${URLbase}/usuarios`);
    const dara = response.json();
    console.log(data);
    return data;
}