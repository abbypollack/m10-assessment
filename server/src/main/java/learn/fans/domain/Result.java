package learn.fans.domain;

import java.util.ArrayList;
import java.util.List;

public class Result<T> {

    private final ArrayList<String> messages = new ArrayList<>();
    private final List<String> errorMessages = new ArrayList<>();
    private ResultType status = ResultType.SUCCESS;
    private ResultType type = ResultType.SUCCESS;
    private T payload;

    public ResultType getType() {
        return type;
    }

    public boolean isSuccess() {
        return type == ResultType.SUCCESS;
    }

    public List<String> getErrorMessages() {
        return new ArrayList<>(errorMessages);
    }

    public T getPayload() {
        return payload;
    }

    public void setPayload(T payload) {
        this.payload = payload;
    }

    public List<String> getMessages() {
        return new ArrayList<>(messages);
    }

    public void addMessage(String message, ResultType type) {
        messages.add(message);
        this.type = type;
    }

    public void addErrorMessage(String message, ResultType type) {
        errorMessages.add(message);
        this.type = type;
    }

    public ResultType getStatus() {
        return status;
    }
}
