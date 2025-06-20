
import React from 'react';
import { View, StyleSheet } from 'react-native';
import InputActions from '../../molecules/Input/input-actions/InputActions';
import ErrorFeedback from '../../molecules/feedback/ErrorFeedback';

interface RegexVisualizerProps {
  regexInput: string;
  onChangeRegexInput: (text: string) => void;
  onClearInput: () => void;
  DiagramComponent: React.ReactNode;
  error?: string;
}

const RegexVisualizer = ({
  regexInput,
  onChangeRegexInput,
  onClearInput,
  DiagramComponent,
  error,
}: RegexVisualizerProps) => {
  return (
    <View style={styles.container}>
      <InputActions
        value={regexInput}
        onChangeText={onChangeRegexInput}
        onClear={onClearInput}
        onExecute={() => {}}
      />
      {error && <ErrorFeedback message={error} />}
      <View style={styles.diagramContainer}>{DiagramComponent}</View>
    </View>
  );
};

export default RegexVisualizer;

const styles = StyleSheet.create({
  container: {
    gap: 16,
    padding: 16,
  },
  diagramContainer: {
    marginTop: 16,
  },
});