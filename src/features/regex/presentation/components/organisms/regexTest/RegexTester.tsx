// organisms/RegexTester.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import InputActions from '../../molecules/Input/input-actions/InputActions';
import MatchResult from '../../molecules/match/match-result/MatchResult';
import ErrorFeedback from '../../molecules/feedback/ErrorFeedback';
import MatchHighlighter from '../../molecules/match/match-highlighter/MatchHighlihter';

interface RegexTesterProps {
  regex: RegExp | null;
  regexInput: string;
  onChangeRegexInput: (text: string) => void;
  testText: string;
  onChangeTestText: (text: string) => void;
  matches: string[];
  onCopyMatch: (match: string) => void;
  onUseMatch: (match: string) => void;
  error?: string;
}

const RegexTester = ({
  regex,
  regexInput,
  onChangeRegexInput,
  testText,
  onChangeTestText,
  matches,
  onCopyMatch,
  onUseMatch,
  error,
}: RegexTesterProps) => {
  return (
    <View style={styles.container}>
      <InputActions
        value={regexInput}
        onChangeText={onChangeRegexInput}
        onClear={() => onChangeRegexInput('')}
        onExecute={() => {}}
      />
      <InputActions
        value={testText}
        onChangeText={onChangeTestText}
        onClear={() => onChangeTestText('')}
        onExecute={() => {}}
      />
      {error && <ErrorFeedback message={error} />}
      <MatchHighlighter text={testText} regex={regex ?? /.^/} />
      {matches.map((match, index) => (
        <MatchResult
          key={index}
          match={match}
          onCopy={() => onCopyMatch(match)}
          onUse={() => onUseMatch(match)}
        />
      ))}
    </View>
  );
};

export default RegexTester;

const styles = StyleSheet.create({
  container: {
    gap: 16,
    padding: 16,
  },
});