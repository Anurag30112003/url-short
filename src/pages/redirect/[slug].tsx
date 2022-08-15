import { prisma } from "../../db/client";
import { useRouter } from 'next/router'


 async function getUrl() {

  const router = useRouter()
  
  const {slug}  = router.query  as {slug: string}
  

  const exists = prisma.url.findMany({
    where: {
        slug,
    },
  });

  const hello = 'hello'

  return (<p>{hello}</p>)


 }
export default getUrl;