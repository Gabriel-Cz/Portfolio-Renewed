import { NextPage } from "next";
import siteData from "@/assets/static/site-data";
import { Content } from "@/components";
import { PageProps } from "@/types";

const data = siteData["About Me"];

interface IndexProps extends PageProps {};

const Index: NextPage<IndexProps> = ({ lang = 'eng' }) => {
  return (
    <Content>
        {data[lang].content}
    </Content>
  )
}

export default Index;