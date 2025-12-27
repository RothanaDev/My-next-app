export default async function ProjectDetail({params}  : {params : Promise<{slug:string}>}){
    const value = await params;
    return(
        <div>
            this is san comchea {value.slug}
        </div>
    )
}