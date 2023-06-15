import React, { useState, useEffect } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Animated,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

interface Connection {
  firstname: string;
  surname: string;
  company: string;
  picture: string;
}

const allConnectionsUrl = 'https://run.mocky.io/v3/0bff210c-7fc8-4964-a555-8d93de3d5f17';

const fetchAllConnections = async (): Promise<Connection[]> => {
  const response = await axios.get(allConnectionsUrl);
  return response.data;
};

const ContactCardsHomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const { isLoading, data } = useQuery<Connection[]>('connections', fetchAllConnections);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState<Connection[]>([]);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [searchResultNotFound, setSearchResultNotFound] = useState(false);
  const searchResultAnimation = useState(new Animated.Value(0))[0];

  useEffect(() => {
    handleSearch();
  }, [data]);

  const handleSearch = () => {
    if (data) {
      const filtered = data.filter(
        (connection) =>
          connection.firstname.toLowerCase().includes(searchQuery.toLowerCase()) ||
          connection.surname.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);

      if (filtered.length === 0) {
        showSearchResultNotFound();
      } else {
        hideSearchResultNotFound();
      }
    }
  };

  const showSearchResultNotFound = () => {
    Animated.timing(searchResultAnimation, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const hideSearchResultNotFound = () => {
    Animated.timing(searchResultAnimation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const resetSearchResult = () => {
    setSearchQuery('');
    setFilteredData([]);
    hideSearchResultNotFound();
  };

  const LoadingComponent: React.FC = () => {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2E466F" />
      </View>
    );
  };

  if (isLoading) {
    return <LoadingComponent />;
  }

  const handleSort = () => {
    const sorted = [...filteredData].sort((a, b) => {
      if (a.firstname === b.firstname) {
        return a.surname.localeCompare(b.surname);
      }
      return a.firstname.localeCompare(b.firstname);
    });

    if (sortOrder === 'asc') {
      setFilteredData(sorted);
      setSortOrder('desc');
    } else {
      setFilteredData(sorted.reverse());
      setSortOrder('asc');
    }
  };

  const handleProfile = (selectedConnection: Connection) => {
    navigation.navigate('ProfileScreen', { selectedConnection });
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="#888"
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity style={styles.searchIconContainer} onPress={handleSearch}>
          <Icon name="search" size={16} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sortButton} onPress={handleSort}>
          <Icon name={sortOrder === 'asc' ? 'sort-alpha-asc' : 'sort-alpha-desc'} size={16} color="#FFF" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.cardsContainer}>
        {filteredData.map((connection, index) => (
          <TouchableOpacity key={index} style={[styles.card, index % 2 === 1 && styles.altCard]} onPress={() => handleProfile(connection)}>
            <Image source={{ uri: connection.picture }} style={styles.profileImage} />
            <View style={styles.infoContainer}>
              <View style={styles.nameContainer}>
                <Text style={styles.nameText}>
                  {connection.firstname} {connection.surname}
                </Text>
              </View>
              <Text style={styles.company}>{connection.company}</Text>
            </View>
            <TouchableOpacity style={styles.iconContainer} onPress={() => handleProfile(connection)}>
              <Icon name="arrow-right" size={16} color="#FFF" />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {searchResultNotFound && (
        <Animated.View style={[styles.searchResultContainer, { opacity: searchResultAnimation }]}>
          <View style={styles.searchResultContainer}>
            <Text style={styles.searchResultText}>Search results not found</Text>
            <TouchableOpacity style={styles.resetButton} onPress={resetSearchResult}>
              <Icon name="times" size={16} color="#FFF" />
            </TouchableOpacity>
          </View>
        </Animated.View>
      )}
    </View>
  );
};

export default ContactCardsHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F4F8FB',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingLeft: 20,
    paddingRight: 10,
    fontSize: 16,
    fontFamily: 'Popins-Regular',
    backgroundColor: '#E9F0FA',
    borderRadius: 20,
    color: '#333',
  },
  searchIconContainer: {
    padding: 10,
    marginLeft: 10,
    backgroundColor: '#2E466F',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sortButton: {
    padding: 10,
    marginLeft: 10,
    backgroundColor: '#2E466F',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardsContainer: {
    flexGrow: 1,
  },
  card: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E9F0FA',
    alignItems: 'center',
  },
  altCard: {
    backgroundColor: '#D6E6F9',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#E9F0FA',
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  company: {
    fontSize: 14,
    color: '#666',
  },
  iconContainer: {
    padding: 10,
    backgroundColor: '#2E466F',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchResultContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  searchResultText: {
    flex: 1,
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resetButton: {
    marginLeft: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
