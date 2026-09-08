import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>

        {/* Profile Header */}
        <View style={styles.header}>
          <View style={styles.profileCircle}>
            <Text style={styles.profileInitials}>ZM</Text>
          </View>

          <Text style={styles.name}>Zwivhuya Malange</Text>

          <Text style={styles.title}>
            Mobile Application & Web Development Student
          </Text>
        </View>

        {/* About Me */}
        <View style={styles.section}>
          <Text style={styles.heading}>About Me</Text>

          <Text style={styles.description}>
            I am a student pursuing a Higher Certificate in Mobile
            Application and Web Development. I am interested in
            technology and enjoy learning how to design and develop
            mobile and web applications.
          </Text>
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.heading}>Education</Text>

          <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>
              Higher Certificate
            </Text>

            <Text style={styles.infoText}>
              Mobile Application and Web Development
            </Text>
          </View>
        </View>

        {/* Technologies */}
        <View style={styles.section}>
          <Text style={styles.heading}>Technologies</Text>

          <View style={styles.skillsContainer}>
            <View style={styles.skill}>
              <Text style={styles.skillText}>HTML</Text>
            </View>

            <View style={styles.skill}>
              <Text style={styles.skillText}>CSS</Text>
            </View>

            <View style={styles.skill}>
              <Text style={styles.skillText}>JavaScript</Text>
            </View>

            <View style={styles.skill}>
              <Text style={styles.skillText}>Kotlin</Text>
            </View>

            <View style={styles.skill}>
              <Text style={styles.skillText}>React Native</Text>
            </View>

            <View style={styles.skill}>
              <Text style={styles.skillText}>Expo</Text>
            </View>
          </View>
        </View>

        {/* Interests */}
        <View style={styles.section}>
          <Text style={styles.heading}>My Interests</Text>

          <Text style={styles.interest}>
            • Mobile Application Development
          </Text>

          <Text style={styles.interest}>
            • Web Development
          </Text>

          <Text style={styles.interest}>
            • UI/UX Design
          </Text>

          <Text style={styles.interest}>
            • Software Development
          </Text>

          <Text style={styles.interest}>
            • Learning New Technologies
          </Text>
        </View>

        {/* Career Goal */}
        <View style={styles.goalBox}>
          <Text style={styles.goalTitle}>Career Goal</Text>

          <Text style={styles.goalText}>
            To become a skilled software developer and create
            innovative mobile and web applications that solve
            real-world problems.
          </Text>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f2f4f7',
  },

  card: {
    backgroundColor: '#ffffff',
    borderRadius: 25,
    padding: 25,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },

  header: {
    alignItems: 'center',
    marginBottom: 25,
  },

  profileCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#163D3C',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },

  profileInitials: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: 'bold',
  },

  name: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#163D3C',
  },

  title: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 8,
    color: '#666666',
  },

  section: {
    marginBottom: 22,
  },

  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#163D3C',
    marginBottom: 10,
  },

  description: {
    fontSize: 15,
    lineHeight: 24,
    color: '#444444',
  },

  infoBox: {
    backgroundColor: '#f2f4f7',
    padding: 15,
    borderRadius: 12,
  },

  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#163D3C',
  },

  infoText: {
    fontSize: 14,
    color: '#555555',
    marginTop: 5,
  },

  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },

  skill: {
    backgroundColor: '#e79b31',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },

  skillText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 13,
  },

  interest: {
    fontSize: 15,
    color: '#444444',
    marginBottom: 7,
  },

  goalBox: {
    backgroundColor: '#163D3C',
    padding: 18,
    borderRadius: 15,
    marginTop: 5,
  },

  goalTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  goalText: {
    color: '#ffffff',
    fontSize: 14,
    lineHeight: 21,
  },
});