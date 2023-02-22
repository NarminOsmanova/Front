import { langdata,ideas,design,card1,card2,card3, first,tools,mails,numbers,discover,company,features,docs,resources,privacy} from "../data/data.js";

const langBtn=document.querySelector("#lang");
const langItem=document.querySelectorAll(".nav-link");
const IdeasItem=document.querySelectorAll(".item");
const DesignItem=document.querySelectorAll(".items");
const card1Item=document.querySelectorAll(".card1");
const card2Item=document.querySelectorAll(".card2");
const card3Item=document.querySelectorAll(".card3");
const firstItem=document.querySelectorAll(".first");
const toolsItem=document.querySelectorAll(".tools");
const mailsItem=document.querySelectorAll(".test");
const numbersItem=document.querySelectorAll(".text");
const discoverItem=document.querySelectorAll(".sec-text");
const companyItem=document.querySelectorAll(".text1")
const featuresItem=document.querySelectorAll(".text2")
const docsItem=document.querySelectorAll(".text3")
const resourcesItem=document.querySelectorAll(".text4");
const privacyItem=document.querySelectorAll(".text5");


const multiLang=()=>{
    if (langBtn.innerHTML === "AZ") {
        for (let x in langdata.en) {
            langItem[x].innerHTML=langdata.az[x];
        }
        for(let y in ideas.en){
            IdeasItem[y].innerHTML=ideas.az[y];
        }
        for (let i in design.en) {
            DesignItem[i].innerHTML=design.az[i];
        }
        for(let a in card1.en){
            card1Item[a].innerHTML=card1.az[a];
        }
        for(let b in card2.en){
            card2Item[b].innerHTML=card2.az[b];
        }
        for(let c in card3.en){
            card3Item[c].innerHTML=card3.az[c];
        }
        for(let d in first.en){
            firstItem[d].innerHTML=first.az[d];
        }
        for(let e in tools.en){
            toolsItem[e].innerHTML=tools.az[e];
        }
        for(let f in mails.en){
            mailsItem[f].innerHTML=mails.az[f];
        }
        for(let g in numbers.en){
            numbersItem[g].innerHTML=numbers.az[g];
        }
        for(let h in discover.en){
            discoverItem[h].innerHTML=discover.az[h];
        }
        for(let l in company.en){
            companyItem[l].innerHTML=company.az[l];
        }
        for(let m in features.en){
            featuresItem[m].innerHTML=features.az[m];
        }
        for(let n in docs.en){
            docsItem[n].innerHTML=docs.az[n];
        }
        for(let p in resources.en){
            resourcesItem[p].innerHTML=resources.az[p];
        }
        for(let z in privacy.en){
            privacyItem[z].innerHTML=privacy.az[z];
        }
        langBtn.innerHTML="EN";
    } else {
        for (let x in langdata.az) {
            langItem[x].innerHTML=langdata.en[x];
        }
        for(let y in ideas.az){
            IdeasItem[y].innerHTML=ideas.en[y];
        }
        for (let i in design.az) {
            DesignItem[i].innerHTML=design.en[i];
        }
        for(let a in card1.az){
            card1Item[a].innerHTML=card1.en[a];
        }
        for(let b in card2.az){
            card2Item[b].innerHTML=card2.en[b];
        }
        for(let c in card3.az){
            card3Item[c].innerHTML=card3.en[c];
        }
        for(let d in first.az){
            firstItem[d].innerHTML=first.en[d];
        }
        for(let e in tools.az){
            toolsItem[e].innerHTML=tools.en[e];
        }
        for(let f in mails.az){
            mailsItem[f].innerHTML=mails.en[f];
        }
        for(let g in numbers.az){
            numbersItem[g].innerHTML=numbers.en[g];
        }
        for(let h in discover.az){
            discoverItem[h].innerHTML=discover.en[h];
        }
        for(let l in company.az){
            companyItem[l].innerHTML=company.en[l];
        }
        for(let m in features.az){
            featuresItem[m].innerHTML=features.en[m];
        }
        for(let n in docs.az){
            docsItem[n].innerHTML=docs.en[n];
        }
        for(let p in resources.az){
            resourcesItem[p].innerHTML=resources.en[p];
        }
        for(let z in privacy.az){
            privacyItem[z].innerHTML=privacy.en[z];
        }
       
        langBtn.innerHTML="AZ";
    }
}

langBtn.onclick=multiLang;