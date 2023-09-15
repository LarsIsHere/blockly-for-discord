function evaluate(s4dxml) {
    

const regex = /<xml[^>]*>((.|[\n\r])*)<\/xml>/;
const match = s4dxml.match(regex);

if (match) {
  const extractedXML = match[0];
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(extractedXML, "text/xml");

}

}