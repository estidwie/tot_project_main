import Layout from "@/components/Layout";
import { MultiSelect } from "@mantine/core";

export default function DashboardPage(){
  return (
    <>
      <Layout title='Dashboard Page'>
        <main>
          <p>Dashboard Page</p>
          <MultiSelect
          data={data}
          label="Your Favorite frameworks/libraries"
          placeholder= "Pick All that You like"
          />
          <p>Perubahan</p> 
        </main>
      </Layout>
    </>
  )
}