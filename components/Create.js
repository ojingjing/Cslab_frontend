import React, { useState } from "react";
import {
    View,
    StyleSheet,
    TextInput,
    SafeAreaView,
    Button,
    Alert,
} from "react-native";

const Create = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    return (
        <SafeAreaView style={style.container}>
            <View>
                <TextInput
                    style={style.title}
                    onChangeText={setTitle}
                    value={title}
                    placeholder="제목"
                />
            </View>

            <View>
                <TextInput
                    style={style.content}
                    onChangeText={setContent}
                    value={content}
                    placeholder="내용"
                />
            </View>
            <View>
                <Button title="글 작성" />
            </View>
        </SafeAreaView>
    );
};
const style = StyleSheet.create({
    container: {
        marginTop: "15%",
    },
    title: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 50,
    },
    content: {
        height: 400,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 50,
    },
});

export default Create;
