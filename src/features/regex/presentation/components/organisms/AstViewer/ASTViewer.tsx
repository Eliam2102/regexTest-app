// organisms/ASTViewer.tsx
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import InputActions from '../../molecules/Input/input-actions/InputActions';
import ErrorFeedback from '../../molecules/feedback/ErrorFeedback';
import Card from '../../atoms/Card/Card';

interface ASTViewerProps {
  regexInput: string;
  onChangeRegexInput: (text: string) => void;
  onClearInput: () => void;
  astData: any;
  error?: string;
}

const ASTViewer = ({
  regexInput,
  onChangeRegexInput,
  onClearInput,
  astData,
  error,
}: ASTViewerProps) => {
  const renderASTNode = (node: any, depth: number = 0) => {
    if (!node) return null;

    return (
      <Card key={node.id} style={{ marginLeft: depth * 16 }}>
        <Text>{node.type}</Text>
        {node.children &&
          node.children.map((child: any) => renderASTNode(child, depth + 1))}
      </Card>
    );
  };

  return (
    <View style={styles.container}>
      <InputActions
        value={regexInput}
        onChangeText={onChangeRegexInput}
        onClear={onClearInput}
        onExecute={() => {}}
      />
      {error && <ErrorFeedback message={error} />}
      <View style={styles.astContainer}>
        {astData ? renderASTNode(astData) : <Text>Ingresa una Regex válida.</Text>}
      </View>
    </View>
  );
};

export default ASTViewer;

const styles = StyleSheet.create({
  container: {
    gap: 16,
    padding: 16,
  },
  astContainer: {
    marginTop: 16,
  },
});