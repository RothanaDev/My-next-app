export default async function Products(){
    await new Promise(resolve  => setTimeout(resolve ,3000))
    return (
        <div>
            this is Product Page 
        </div>
    )
}