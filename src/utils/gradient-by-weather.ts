// Weather condition gradients for day and night
export const weatherGradients = {
  // Code 1000 - Sunny/Clear
  1000: {
    day: 'linear-gradient(135deg, #87CEEB 0%, #98D8E8 50%, #FFD700 100%)', // Light blue to gold
    night: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)', // Deep night blues
  },

  // Code 1003 - Partly Cloudy
  1003: {
    day: 'linear-gradient(135deg, #B0E0E6 0%, #87CEEB 30%, #F0F8FF 70%, #D3D3D3 100%)', // Blue to light gray
    night: 'linear-gradient(135deg, #2c3e50 0%, #34495e 30%, #4a6741 70%, #2c3e50 100%)', // Gray-blue night
  },

  // Code 1006 - Cloudy
  1006: {
    day: 'linear-gradient(135deg, #A9A9A9 0%, #D3D3D3 50%, #E6E6FA 100%)', // Gray shades
    night: 'linear-gradient(135deg, #2c3e50 0%, #34495e 50%, #3d4956 100%)', // Dark grays
  },

  // Code 1009 - Overcast
  1009: {
    day: 'linear-gradient(135deg, #708090 0%, #A9A9A9 50%, #C0C0C0 100%)', // Slate to silver
    night: 'linear-gradient(135deg, #1e272e 0%, #2c3e50 50%, #34495e 100%)', // Very dark grays
  },

  // Code 1030 - Mist
  1030: {
    day: 'linear-gradient(135deg, #F0F8FF 0%, #E6E6FA 30%, #D3D3D3 70%, #C0C0C0 100%)', // Misty whites
    night: 'linear-gradient(135deg, #3d4956 0%, #4a5568 30%, #2d3748 70%, #1a202c 100%)', // Misty grays
  },

  // Code 1063 - Patchy rain nearby
  1063: {
    day: 'linear-gradient(135deg, #87CEEB 0%, #4682B4 30%, #6495ED 70%, #708090 100%)', // Blue with gray
    night: 'linear-gradient(135deg, #2c3e50 0%, #34495e 30%, #1e3799 70%, #2f3640 100%)', // Dark blue-gray
  },

  // Code 1066 - Patchy snow nearby
  1066: {
    day: 'linear-gradient(135deg, #F0F8FF 0%, #E6E6FA 30%, #ADD8E6 70%, #B0C4DE 100%)', // Icy whites and blues
    night: 'linear-gradient(135deg, #2c3e50 0%, #34495e 30%, #3c6382 70%, #40739e 100%)', // Cold night blues
  },

  // Code 1069 - Patchy sleet nearby
  1069: {
    day: 'linear-gradient(135deg, #B0E0E6 0%, #87CEEB 25%, #D3D3D3 50%, #A9A9A9 100%)', // Blue to gray mix
    night: 'linear-gradient(135deg, #2c3e50 0%, #34495e 25%, #4a5568 50%, #2d3748 100%)', // Mixed grays
  },

  // Code 1072 - Patchy freezing drizzle nearby
  1072: {
    day: 'linear-gradient(135deg, #F0F8FF 0%, #E0FFFF 25%, #B0E0E6 50%, #C0C0C0 100%)', // Icy blue-white
    night: 'linear-gradient(135deg, #1a202c 0%, #2d3748 25%, #3c6382 50%, #2c3e50 100%)', // Frozen night
  },

  // Code 1087 - Thundery outbreaks nearby
  1087: {
    day: 'linear-gradient(135deg, #4682B4 0%, #708090 25%, #2F4F4F 50%, #696969 100%)', // Stormy blues and grays
    night: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #0f3460 50%, #1e272e 100%)', // Dark storm colors
  },

  // Code 1114 - Blowing snow
  1114: {
    day: 'linear-gradient(135deg, #F5F5F5 0%, #E6E6FA 25%, #D3D3D3 50%, #B0C4DE 100%)', // Blowing snow whites
    night: 'linear-gradient(135deg, #2d3748 0%, #4a5568 25%, #3c6382 50%, #34495e 100%)', // Windy night
  },

  // Code 1117 - Blizzard
  1117: {
    day: 'linear-gradient(135deg, #FFFFFF 0%, #F0F8FF 25%, #E6E6FA 50%, #C0C0C0 100%)', // Intense white storm
    night: 'linear-gradient(135deg, #1a202c 0%, #2d3748 25%, #4a5568 50%, #2c3e50 100%)', // Severe night storm
  },

  // Code 1135 - Fog
  1135: {
    day: 'linear-gradient(135deg, #F5F5DC 0%, #E6E6FA 30%, #D3D3D3 70%, #A9A9A9 100%)', // Foggy beige to gray
    night: 'linear-gradient(135deg, #2f3640 0%, #57606f 30%, #3d4956 70%, #2c3e50 100%)', // Dark fog
  },

  // Code 1147 - Freezing fog
  1147: {
    day: 'linear-gradient(135deg, #F0F8FF 0%, #E0FFFF 30%, #E6E6FA 70%, #B0E0E6 100%)', // Icy fog
    night: 'linear-gradient(135deg, #1a202c 0%, #2d3748 30%, #3c6382 70%, #2c5aa0 100%)', // Frozen night fog
  },

  // Code 1150 - Patchy light drizzle
  1150: {
    day: 'linear-gradient(135deg, #E6E6FA 0%, #D3D3D3 30%, #B0E0E6 70%, #87CEEB 100%)', // Light drizzle
    night: 'linear-gradient(135deg, #34495e 0%, #4a5568 30%, #3c6382 70%, #2980b9 100%)', // Night drizzle
  },

  // Code 1153 - Light drizzle
  1153: {
    day: 'linear-gradient(135deg, #B0E0E6 0%, #87CEEB 30%, #6495ED 70%, #4682B4 100%)', // Drizzle blues
    night: 'linear-gradient(135deg, #2c3e50 0%, #34495e 30%, #3c6382 70%, #2980b9 100%)', // Night rain
  },

  // Code 1168 - Freezing drizzle
  1168: {
    day: 'linear-gradient(135deg, #F0F8FF 0%, #B0E0E6 25%, #87CEEB 50%, #6495ED 100%)', // Icy drizzle
    night: 'linear-gradient(135deg, #1a202c 0%, #2c3e50 25%, #3c6382 50%, #2980b9 100%)', // Frozen rain night
  },

  // Code 1171 - Heavy freezing drizzle
  1171: {
    day: 'linear-gradient(135deg, #E0FFFF 0%, #87CEEB 25%, #4682B4 50%, #2F4F4F 100%)', // Heavy icy rain
    night: 'linear-gradient(135deg, #0f3460 0%, #1e3799 25%, #2980b9 50%, #1a202c 100%)', // Severe frozen rain
  },

  // Code 1180 - Patchy light rain
  1180: {
    day: 'linear-gradient(135deg, #ADD8E6 0%, #87CEEB 30%, #6495ED 70%, #4682B4 100%)', // Light rain blues
    night: 'linear-gradient(135deg, #2c3e50 0%, #34495e 30%, #3c6382 70%, #2980b9 100%)', // Light night rain
  },

  // Code 1183 - Light rain
  1183: {
    day: 'linear-gradient(135deg, #87CEEB 0%, #6495ED 30%, #4682B4 70%, #2F4F4F 100%)', // Rain progression
    night: 'linear-gradient(135deg, #2c3e50 0%, #3c6382 30%, #2980b9 70%, #1e3799 100%)', // Night rain
  },

  // Code 1186 - Moderate rain at times
  1186: {
    day: 'linear-gradient(135deg, #6495ED 0%, #4682B4 25%, #2F4F4F 50%, #708090 100%)', // Moderate rain
    night: 'linear-gradient(135deg, #1e3799 0%, #2980b9 25%, #3c6382 50%, #2c3e50 100%)', // Moderate night rain
  },

  // Code 1189 - Moderate rain
  1189: {
    day: 'linear-gradient(135deg, #4682B4 0%, #2F4F4F 30%, #708090 70%, #A9A9A9 100%)', // Steady rain
    night: 'linear-gradient(135deg, #1e3799 0%, #2980b9 30%, #3c6382 70%, #2c3e50 100%)', // Steady night rain
  },

  // Code 1192 - Heavy rain at times
  1192: {
    day: 'linear-gradient(135deg, #2F4F4F 0%, #708090 25%, #4682B4 50%, #191970 100%)', // Heavy rain
    night: 'linear-gradient(135deg, #0f3460 0%, #1e3799 25%, #2980b9 50%, #1a1a2e 100%)', // Heavy night rain
  },

  // Code 1195 - Heavy rain
  1195: {
    day: 'linear-gradient(135deg, #191970 0%, #2F4F4F 25%, #708090 50%, #4682B4 100%)', // Intense rain
    night: 'linear-gradient(135deg, #000080 0%, #0f3460 25%, #1e3799 50%, #16213e 100%)', // Intense night rain
  },

  // Code 1198 - Light freezing rain
  1198: {
    day: 'linear-gradient(135deg, #E0FFFF 0%, #B0E0E6 25%, #87CEEB 50%, #4682B4 100%)', // Light ice rain
    night: 'linear-gradient(135deg, #1a202c 0%, #2c3e50 25%, #3c6382 50%, #2980b9 100%)', // Light ice night
  },

  // Code 1201 - Moderate or heavy freezing rain
  1201: {
    day: 'linear-gradient(135deg, #B0E0E6 0%, #4682B4 25%, #2F4F4F 50%, #708090 100%)', // Heavy ice rain
    night: 'linear-gradient(135deg, #0f3460 0%, #1e3799 25%, #2980b9 50%, #2c3e50 100%)', // Heavy ice night
  },

  // Code 1204 - Light sleet
  1204: {
    day: 'linear-gradient(135deg, #F0F8FF 0%, #B0E0E6 30%, #87CEEB 70%, #A9A9A9 100%)', // Light sleet
    night: 'linear-gradient(135deg, #2c3e50 0%, #34495e 30%, #3c6382 70%, #4a5568 100%)', // Night sleet
  },

  // Code 1207 - Moderate or heavy sleet
  1207: {
    day: 'linear-gradient(135deg, #87CEEB 0%, #4682B4 25%, #708090 50%, #A9A9A9 100%)', // Heavy sleet
    night: 'linear-gradient(135deg, #1e3799 0%, #2980b9 25%, #4a5568 50%, #2c3e50 100%)', // Heavy night sleet
  },

  // Code 1210 - Patchy light snow
  1210: {
    day: 'linear-gradient(135deg, #FFFFFF 0%, #F0F8FF 30%, #E6E6FA 70%, #D3D3D3 100%)', // Light snow
    night: 'linear-gradient(135deg, #2d3748 0%, #4a5568 30%, #3c6382 70%, #34495e 100%)', // Night light snow
  },

  // Code 1213 - Light snow
  1213: {
    day: 'linear-gradient(135deg, #F8F8FF 0%, #F0F8FF 25%, #E6E6FA 50%, #D3D3D3 100%)', // Snow whites
    night: 'linear-gradient(135deg, #2c3e50 0%, #34495e 25%, #4a5568 50%, #3c6382 100%)', // Night snow
  },

  // Code 1216 - Patchy moderate snow
  1216: {
    day: 'linear-gradient(135deg, #F0F8FF 0%, #E6E6FA 25%, #D3D3D3 50%, #C0C0C0 100%)', // Moderate snow
    night: 'linear-gradient(135deg, #2c3e50 0%, #34495e 25%, #4a5568 50%, #2d3748 100%)', // Moderate night snow
  },

  // Code 1219 - Moderate snow
  1219: {
    day: 'linear-gradient(135deg, #E6E6FA 0%, #D3D3D3 25%, #C0C0C0 50%, #A9A9A9 100%)', // Steady snow
    night: 'linear-gradient(135deg, #34495e 0%, #4a5568 25%, #2d3748 50%, #1a202c 100%)', // Steady night snow
  },

  // Code 1222 - Patchy heavy snow
  1222: {
    day: 'linear-gradient(135deg, #D3D3D3 0%, #C0C0C0 25%, #A9A9A9 50%, #808080 100%)', // Heavy snow
    night: 'linear-gradient(135deg, #4a5568 0%, #2d3748 25%, #1a202c 50%, #2c3e50 100%)', // Heavy night snow
  },

  // Code 1225 - Heavy snow
  1225: {
    day: 'linear-gradient(135deg, #C0C0C0 0%, #A9A9A9 25%, #808080 50%, #696969 100%)', // Intense snow
    night: 'linear-gradient(135deg, #2d3748 0%, #1a202c 25%, #2c3e50 50%, #34495e 100%)', // Intense night snow
  },

  // Code 1237 - Ice pellets
  1237: {
    day: 'linear-gradient(135deg, #F0F8FF 0%, #E0FFFF 25%, #B0E0E6 50%, #C0C0C0 100%)', // Ice pellets
    night: 'linear-gradient(135deg, #1a202c 0%, #2d3748 25%, #3c6382 50%, #4a5568 100%)', // Night ice pellets
  },

  // Code 1240 - Light rain shower
  1240: {
    day: 'linear-gradient(135deg, #87CEEB 0%, #6495ED 30%, #4682B4 70%, #B0E0E6 100%)', // Rain shower
    night: 'linear-gradient(135deg, #2c3e50 0%, #3c6382 30%, #2980b9 70%, #34495e 100%)', // Night shower
  },

  // Code 1243 - Moderate or heavy rain shower
  1243: {
    day: 'linear-gradient(135deg, #4682B4 0%, #2F4F4F 25%, #708090 50%, #6495ED 100%)', // Heavy shower
    night: 'linear-gradient(135deg, #1e3799 0%, #0f3460 25%, #2980b9 50%, #3c6382 100%)', // Heavy night shower
  },

  // Code 1246 - Torrential rain shower
  1246: {
    day: 'linear-gradient(135deg, #191970 0%, #2F4F4F 20%, #000080 40%, #4682B4 100%)', // Torrential rain
    night: 'linear-gradient(135deg, #000080 0%, #0f3460 20%, #191970 40%, #1e3799 100%)', // Torrential night
  },

  // Code 1249 - Light sleet showers
  1249: {
    day: 'linear-gradient(135deg, #F0F8FF 0%, #B0E0E6 25%, #87CEEB 50%, #D3D3D3 100%)', // Light sleet showers
    night: 'linear-gradient(135deg, #2c3e50 0%, #34495e 25%, #3c6382 50%, #4a5568 100%)', // Night sleet showers
  },

  // Code 1252 - Moderate or heavy sleet showers
  1252: {
    day: 'linear-gradient(135deg, #87CEEB 0%, #4682B4 25%, #708090 50%, #A9A9A9 100%)', // Heavy sleet showers
    night: 'linear-gradient(135deg, #1e3799 0%, #2980b9 25%, #4a5568 50%, #2c3e50 100%)', // Heavy night sleet showers
  },

  // Code 1255 - Light snow showers
  1255: {
    day: 'linear-gradient(135deg, #FFFFFF 0%, #F0F8FF 25%, #E6E6FA 50%, #B0E0E6 100%)', // Light snow showers
    night: 'linear-gradient(135deg, #2d3748 0%, #4a5568 25%, #3c6382 50%, #2c3e50 100%)', // Night snow showers
  },

  // Code 1258 - Moderate or heavy snow showers
  1258: {
    day: 'linear-gradient(135deg, #E6E6FA 0%, #D3D3D3 25%, #C0C0C0 50%, #A9A9A9 100%)', // Heavy snow showers
    night: 'linear-gradient(135deg, #34495e 0%, #4a5568 25%, #2d3748 50%, #1a202c 100%)', // Heavy night snow showers
  },

  // Code 1261 - Light showers of ice pellets
  1261: {
    day: 'linear-gradient(135deg, #F0F8FF 0%, #E0FFFF 30%, #B0E0E6 70%, #C0C0C0 100%)', // Light ice pellet showers
    night: 'linear-gradient(135deg, #1a202c 0%, #2d3748 30%, #3c6382 70%, #4a5568 100%)', // Night ice pellet showers
  },

  // Code 1264 - Moderate or heavy showers of ice pellets
  1264: {
    day: 'linear-gradient(135deg, #B0E0E6 0%, #87CEEB 25%, #4682B4 50%, #A9A9A9 100%)', // Heavy ice pellet showers
    night: 'linear-gradient(135deg, #0f3460 0%, #1e3799 25%, #2980b9 50%, #2c3e50 100%)', // Heavy night ice pellet showers
  },

  // Code 1273 - Patchy light rain with thunder
  1273: {
    day: 'linear-gradient(135deg, #4682B4 0%, #708090 25%, #2F4F4F 50%, #FFD700 100%)', // Thunder rain with yellow
    night: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #0f3460 50%, #8B008B 100%)', // Thunder night with purple
  },

  // Code 1276 - Moderate or heavy rain with thunder
  1276: {
    day: 'linear-gradient(135deg, #2F4F4F 0%, #708090 20%, #191970 40%, #FFD700 100%)', // Heavy thunder rain
    night: 'linear-gradient(135deg, #000080 0%, #0f3460 20%, #1a1a2e 40%, #8B008B 100%)', // Heavy thunder night
  },

  // Code 1279 - Patchy light snow with thunder
  1279: {
    day: 'linear-gradient(135deg, #F0F8FF 0%, #E6E6FA 25%, #D3D3D3 50%, #FFD700 100%)', // Thunder snow
    night: 'linear-gradient(135deg, #2c3e50 0%, #34495e 25%, #4a5568 50%, #8B008B 100%)', // Thunder snow night
  },

  // Code 1282 - Moderate or heavy snow with thunder
  1282: {
    day: 'linear-gradient(135deg, #D3D3D3 0%, #C0C0C0 20%, #A9A9A9 40%, #FFD700 100%)', // Heavy thunder snow
    night: 'linear-gradient(135deg, #34495e 0%, #2d3748 20%, #1a202c 40%, #8B008B 100%)', // Heavy thunder snow night
  },
};

// Helper function to get gradient by weather code and time
export const getWeatherGradient = (code: number, isDay: 1 | 0): string => {
  const gradient = weatherGradients[code as keyof typeof weatherGradients];
  if (!gradient) {
    // Fallback to default gradients
    return isDay
      ? 'linear-gradient(135deg, #87CEEB 0%, #98D8E8 50%, #FFD700 100%)'
      : 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)';
  }
  return isDay ? gradient.day : gradient.night;
};

// TypeScript interface for weather gradient
export interface WeatherGradient {
  day: string;
  night: string;
}

// Export weather codes for reference
export const WEATHER_CODES = {
  SUNNY: 1000,
  PARTLY_CLOUDY: 1003,
  CLOUDY: 1006,
  OVERCAST: 1009,
  MIST: 1030,
  PATCHY_RAIN_NEARBY: 1063,
  PATCHY_SNOW_NEARBY: 1066,
  PATCHY_SLEET_NEARBY: 1069,
  PATCHY_FREEZING_DRIZZLE_NEARBY: 1072,
  THUNDERY_OUTBREAKS_NEARBY: 1087,
  BLOWING_SNOW: 1114,
  BLIZZARD: 1117,
  FOG: 1135,
  FREEZING_FOG: 1147,
  PATCHY_LIGHT_DRIZZLE: 1150,
  LIGHT_DRIZZLE: 1153,
  FREEZING_DRIZZLE: 1168,
  HEAVY_FREEZING_DRIZZLE: 1171,
  PATCHY_LIGHT_RAIN: 1180,
  LIGHT_RAIN: 1183,
  MODERATE_RAIN_AT_TIMES: 1186,
  MODERATE_RAIN: 1189,
  HEAVY_RAIN_AT_TIMES: 1192,
  HEAVY_RAIN: 1195,
  LIGHT_FREEZING_RAIN: 1198,
  MODERATE_OR_HEAVY_FREEZING_RAIN: 1201,
  LIGHT_SLEET: 1204,
  MODERATE_OR_HEAVY_SLEET: 1207,
  PATCHY_LIGHT_SNOW: 1210,
  LIGHT_SNOW: 1213,
  PATCHY_MODERATE_SNOW: 1216,
  MODERATE_SNOW: 1219,
  PATCHY_HEAVY_SNOW: 1222,
  HEAVY_SNOW: 1225,
  ICE_PELLETS: 1237,
  LIGHT_RAIN_SHOWER: 1240,
  MODERATE_OR_HEAVY_RAIN_SHOWER: 1243,
  TORRENTIAL_RAIN_SHOWER: 1246,
  LIGHT_SLEET_SHOWERS: 1249,
  MODERATE_OR_HEAVY_SLEET_SHOWERS: 1252,
  LIGHT_SNOW_SHOWERS: 1255,
  MODERATE_OR_HEAVY_SNOW_SHOWERS: 1258,
  LIGHT_SHOWERS_OF_ICE_PELLETS: 1261,
  MODERATE_OR_HEAVY_SHOWERS_OF_ICE_PELLETS: 1264,
  PATCHY_LIGHT_RAIN_WITH_THUNDER: 1273,
  MODERATE_OR_HEAVY_RAIN_WITH_THUNDER: 1276,
  PATCHY_LIGHT_SNOW_WITH_THUNDER: 1279,
  MODERATE_OR_HEAVY_SNOW_WITH_THUNDER: 1282,
} as const;
