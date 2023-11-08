import { Page, Text, View } from "@react-pdf/renderer";
export const PDFPage = ({pageData}) => {
  return (
    <Page size="A4">
      <View style={{ padding: 10 }}>
        {pageData.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </View>
    </Page>
  );
};
