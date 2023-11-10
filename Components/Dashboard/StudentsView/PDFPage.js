import { Page, Text, View } from "@react-pdf/renderer";
export const PDFPage = ({ pageData, i, isLastPage }) => {
  return (
    <Page size="A4">
      <View style={{ padding: 10 }}>
        {i === 0 && <Text style={{ color: "red" }}>First Page</Text>}
        {pageData.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
        {isLastPage && <Text style={{ color: "red" }}>Last Page</Text>}
      </View>
    </Page>
  );
};
