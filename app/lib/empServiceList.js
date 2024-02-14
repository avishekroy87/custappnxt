export default async function empServiceList() {
    const result = await fetch("https://dummy.restapiexample.com/api/v1/employees", {
        next:{
            revalidate: 10
        }
    });

    if(result != 'Ok'){
        throw new Error("Error in getting Emp list")
    }

    return result.json();
}