import { Location, Permissions } from 'expo';

export const getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status === 'granted') {
      let location = await Location.getCurrentPositionAsync({});
      return location
    } else {
        return 'Location Services Permision Denied'
    }
  };
