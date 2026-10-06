import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Text style={styles.motivation}>
        Teruslah melangkah. Setiap hari adalah kesempatan baru untuk tumbuh dan
        menjadi lebih baik.
      </Text>
      <Text style={styles.lorem}>Lorem ipsum dolor sit amet.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  motivation: {
    marginTop: 12,
    textAlign: 'center',
  },
  lorem: {
    marginTop: 12,
    textAlign: 'center',
  },
});
