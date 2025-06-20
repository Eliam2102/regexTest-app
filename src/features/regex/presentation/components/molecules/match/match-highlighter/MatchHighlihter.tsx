import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface MatchHighlighterProps {
  text: string;
  regex: RegExp;
}

const MatchHighlighter = ({ text, regex }: MatchHighlighterProps) => {
  if (!text) return null;

  // Obtenemos todas las coincidencias
  const parts = [];
  let lastIndex = 0;

  // Ejecutamos el regex globalmente para obtener todas las coincidencias
  const matches = [...text.matchAll(regex)];

  matches.forEach((match, index) => {
    if (match.index === undefined) return;

    // Texto antes de la coincidencia
    if (lastIndex < match.index) {
      parts.push({
        text: text.substring(lastIndex, match.index),
        highlight: false,
        key: `text-${index}-${lastIndex}`,
      });
    }

    // La coincidencia encontrada
    parts.push({
      text: match[0],
      highlight: true,
      key: `match-${index}-${match.index}`,
    });

    lastIndex = match.index + match[0].length;
  });

  // Texto restante después de la última coincidencia
  if (lastIndex < text.length) {
    parts.push({
      text: text.substring(lastIndex),
      highlight: false,
      key: `text-end-${lastIndex}`,
    });
  }

  return (
    <Text style={styles.container}>
      {parts.map((part) => (
        <Text
          key={part.key}
          style={part.highlight ? styles.highlight : styles.normal}
        >
          {part.text}
        </Text>
      ))}
    </Text>
  );
};

export default MatchHighlighter;

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    fontSize: 16,
  },
  normal: {
    color: '#000',
  },
  highlight: {
    backgroundColor: 'yellow',
    color: '#000',
    fontWeight: 'bold',
  },
});