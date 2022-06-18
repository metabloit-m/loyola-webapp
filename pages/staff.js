import Test from "../lib/images";
import Image from "next/image";

export async function getStaticProps() {
    const staff = Test();
    return {
        props: {
            staff
        }
    }
}

export default function Staff({staff}) {
    // console.log(staff)

    return (
        <>
            <div id="top_staff" className="min-h-screen">
                <div className="mx-auto shadow-lg max-w-2xl items-center p-20 mb-8 mt-8 space-y-2">
                    <h1 className="font-light italic text-2xl text-center mb-20">Know our staff...</h1>
                    {staff.map(({id, name, title, image}) => (
                        <>
                            <div key={id}
                                 className={`card md:card-side bg-base-100 flex ${id % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                                <figure className="mask mask-squircle">
                                    <Image src={`/images/${id}.png`} width="160" height="160"/>
                                </figure>
                                <div className="card-body items-center justify-center">
                                    <h1 className="card-title">{name}</h1>
                                    <p className="italic overline">{title}</p>
                                </div>
                            </div>
                            {id < staff.length ? <div className="divider"></div> : ''}
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}