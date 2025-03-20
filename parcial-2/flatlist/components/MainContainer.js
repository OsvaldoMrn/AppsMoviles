import { Text, View} from 'react-native';
import styles from '../styles/styles';
import DynamicList from './DynamicList';

export default function MainContainer () {
    return (
    <View style={styles.container}>
        <View style={styles.body}>
            <Text style={styles.textBody}>Pokédex</Text>
            <DynamicList />
        </View>
    </View>
    );
}

